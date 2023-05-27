<div class="modal fade" id="ViewModal" tabindex="-1" role="dialog" aria-labelledby="ViewModal" aria-hidden="true">
    <div class="modal-dialog" style="min-width: {{ isset($width) ? $width : "" }};" id="ModalViewDialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="ViewTargetModal">
                @if(isset($blade))
                    @include($blade)
                @endif
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
