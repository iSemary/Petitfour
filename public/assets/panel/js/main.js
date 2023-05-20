headerParams = {
    "Content-Type": "application/x-www-form-urlencoded",
};
const CsrfToken = $('meta[name="_token"]').attr("content");
const LoadingSpan = `<span><i class="fa fa-spinner fa-spin"></i> Please wait, processing...</span>`;

// Delete Form
$(document).on("click", "#DeleteForm button", function (e) {
    e.preventDefault();
    let DeleteForm = $(this).parent("form");
    let ModelDeleteType = DeleteForm.attr("data-delete-type");
    Swal.fire({
        title: lang.are_you_sure,
        text: lang.you_want_delete_this + ModelDeleteType + "?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: lang.delete,
        cancelButtonText: lang.cancel,
    }).then((result) => {
        if (result.value) {
            DeleteForm.submit();
        }
    });
});

// DataTables Config
$.extend(true, $.fn.dataTable.defaults, {
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "All"],
    ],
    dom: "Blfrtip",
    // dom: "lpftrip",
    buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5", "print"],
});

// Get URL parameter name
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

// Select 2
$(".select2").select2({});

// Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).on("change", "#uploadImg", function (e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#previewImg").attr("src", e.target.result);
        };
        reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
});

const LargeModalStrings = [""];

/**
 *
 * ===== Create Modal Section
 *
 */

function OpenCreateModal(url) {
    // $("#CreateModal").modal("show");
    $("#CreateModal").modal({
        backdrop: true,
        show: true,
    });
    $(".modal-dialog").draggable({
        handle: ".modal-header",
    });

    for (i = 0; i < LargeModalStrings.length; i++) {
        if (url.includes(LargeModalStrings[i])) {
            $("#ModalCreateDialog").addClass("modal-lg");
            break;
        } else {
            $("#ModalCreateDialog").removeClass("modal-lg");
        }
    }

    $("#CreateTargetModal")
        .html(LoadingSpan)
        .load(url, function () {
            $("select.select2").select2({});
            $("body").tooltip({
                selector: '[data-toggle="tooltip"]',
            });
        });
}

$(document).on("submit", "#CreateForm", function (e) {
    e.preventDefault();
    let formBtn = $(this).find(":submit");
    let formData = new FormData(this);
    let formID = "#" + $(this).attr("id");
    let formUrl = $(this).attr("action");

    // Custom Configs for creating products
    if ($(this).attr("data-type") == "product") {
        createProductConfigs();
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: formUrl,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".create-status").html(
                `<h6 class="text-muted"><i class="fas fa-circle-notch fa-spin"></i> ` +
                    lang.creating +
                    ` ...` +
                    `</h6>`
            );
            formBtn.prop("disabled", true);
        },
        success: function (data) {
            $(".create-status").html(
                `<h6 class="text-success"><i class="fas fa-check-circle"></i> ` +
                    lang.created +
                    `</h6>`
            );
            formBtn.prop("disabled", false);
            $("input, textarea", formID)
                .not(
                    ":input[type=button], :input[type=submit], :input[type=hidden], :input[type=reset]"
                )
                .val("");
            $(".dataTable").DataTable().ajax.reload();
        },
        error: function (data) {
            $(".create-status").html("");
            formBtn.prop("disabled", false);
            console.log(data);
            // $.each(xhr.responseJSON.errors, function(key, value) {
            $(".create-status").append(
                `<h6 class="text-danger"><i class="fas fa-exclamation-triangle"></i> ` +
                    (data.responseJSON ?? lang.something_went_wrong_404) +
                    `</h6>`
            );
            // });
            formBtn.prop("disabled", false);
        },
    });
});

/**
 *
 * ===== Edit Modal Section
 *
 */

function OpenEditModal(url) {
    // $("#EditModal").modal("show");
    $("#EditModal").modal({
        backdrop: true,
        show: true,
    });
    $(".modal-dialog").draggable({
        handle: ".modal-header",
    });

    for (i = 0; i < LargeModalStrings.length; i++) {
        if (url.includes(LargeModalStrings[i])) {
            $("#ModalEditDialog").addClass("modal-lg");
            break;
        } else {
            $("#ModalEditDialog").removeClass("modal-lg");
        }
    }
    $("#EditTargetModal")
        .html(LoadingSpan)
        .load(url, function () {
            $("select.select2").select2({});
            $("body").tooltip({
                selector: '[data-toggle="tooltip"]',
            });
        });
}

$(document).on("submit", "#EditForm", function (e) {
    e.preventDefault();
    let formBtn = $(this).find(":submit");
    let formData = new FormData(this);
    let formID = "#" + $(this).attr("id");
    let formUrl = $(this).attr("action");

    $.ajax({
        type: "POST",
        dataType: "json",
        url: formUrl,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $(".edit-status").html(
                `<h6 class="text-muted"><i class="fas fa-circle-notch fa-spin"></i> ` +
                    lang.updating +
                    ` ...` +
                    `</h6>`
            );
            formBtn.prop("disabled", true);
        },
        success: function (data) {
            $(".edit-status").html(
                `<h6 class="text-success"><i class="fas fa-check-circle"></i> ` +
                    lang.updated +
                    `</h6>`
            );
            formBtn.prop("disabled", false);
            $(".dataTable").DataTable().ajax.reload();
        },
        error: function (xhr) {
            $(".edit-status").html("");
            formBtn.prop("disabled", false);
            $.each(xhr.responseJSON.errors, function (key, value) {
                $(".edit-status").append(
                    `<h6 class="text-danger"><i class="fas fa-exclamation-triangle"></i> ` +
                        value[0] +
                        `</h6>`
                );
            });
        },
    });
});
$("#EditModal").on("hidden.bs.modal", function () {
    $("#EditTargetModal").html("");
});
$("#CreateModal").on("hidden.bs.modal", function () {
    $("#CreateTargetModal").html("");
});

/**
 *
 * ===== Delete Function Section
 *
 */

function DeleteRow(link, ModelDeleteType) {
    Swal.fire({
        title: lang.are_you_sure,
        text: lang.you_want_delete_this + ModelDeleteType + " ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: lang.delete,
        cancelButtonText: lang.cancel,
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: link,
                type: "DELETE",
                data: {
                    _token: CsrfToken,
                },
            })
                .done(function (data) {
                    if (data.status == 200) {
                        Swal.fire({
                            text: lang.deleted_successfully,
                            confirmButtonText: lang.ok,
                            type: "success",
                            toast: true,
                            position: "bottom",
                        });
                    } else {
                        Swal.fire({
                            text: data.response,
                            confirmButtonText: lang.ok,
                            type: "error",
                            toast: true,
                            position: "bottom",
                        });
                    }
                    $(".dataTable").DataTable().ajax.reload();
                })
                .fail(function (data) {
                    Swal.fire({
                        text: data.response,
                        type: "error",
                        toast: true,
                        position: "bottom",
                    });
                });
        }
    });
}

$(document).on("click", ".delete-btn", function (event) {
    event.preventDefault();
    DeleteRow($(this).attr("data-url"), $(this).attr("data-delete-type"));
});

// No space input
function disable_input_spaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, "");
    }
}

$(document).on("keypress", ".no-input-space", function (e) {
    if (e.which === 32) return false;

    if (!/[0-9a-zA-Z-]/.test(String.fromCharCode(e.which))) return false;
});

function filterTable(
    Route,
    TableID,
    from_date,
    to_date,
    init,
    cols,
    colDefs,
    dataExtra
) {
    // init
    if (init) {
        $(TableID).DataTable().destroy();
    }

    let data = {
        from_date: from_date ?? null,
        to_date: to_date ?? null,
    };
    if (dataExtra) {
        $.extend(data, dataExtra);
    }

    $(TableID).DataTable({
        order: [[0, "desc"]],
        processing: true,
        serverSide: true,
        columnDefs: colDefs ?? null,
        ajax: {
            url: Route,
            data: data,
        },
        columns: cols,
    });
}

$(document).on("submit", "#filterTable", function (e) {
    e.preventDefault();
    filterTable(
        Route,
        TableID,
        $("#from_date").val(),
        $("#to_date").val(),
        true,
        cols
    );
});

$(document).on("click", "#duplicateBtn", function (e) {
    $("#mainContent:first-of-type").clone().appendTo("#mainContainer");
});
