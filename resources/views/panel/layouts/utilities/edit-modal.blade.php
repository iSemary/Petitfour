<div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="EditModal" aria-hidden="true">
    <div class="modal-dialog" id="ModalEditDialog" role="document">
        <div class="modal-content">
            <div class="modal-body" id="EditTargetModal"></div>
        </div>
    </div>
</div>
@push('scripts')
    <script>
        $(document).on('click', '.edit-btn', function(e) {
            OpenEditModal($(this).attr('data-url'));
        });
     $("select.select2").select2({});

    </script>
@endpush
