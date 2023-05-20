<div class="modal fade" id="CreateModal" tabindex="-1" role="dialog" aria-labelledby="CreateModal" aria-hidden="true">
    <div class="modal-dialog" id="ModalCreateDialog" role="document">
        <div class="modal-content">
            <div class="modal-body" id="CreateTargetModal"></div>
        </div>
    </div>
</div>
@push('scripts')
    <script>
        $(document).on('click', '.create-btn', function(e) {
            OpenCreateModal($(this).attr('data-url'));
        });
        $("select.select2").select2({});
    </script>
@endpush
