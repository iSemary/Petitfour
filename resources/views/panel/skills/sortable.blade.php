<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">Sort Skills</h3>
        </div>
        <div class="card-body">
            <form action="{{ route('skills.updateSort') }}" id="SortForm" method="POST">
                @csrf
                {{ method_field('PUT') }}
                <ul class="sortable-items" id="sortable">
                    @foreach ($skills as $skill)
                        <li class="sortable-item" data-id="{{ $skill->id }}">{{ $skill->name }}</li>
                    @endforeach
                </ul>
            </form>
        </div>
    </div>
</section>
<script>
    $(document).ready(function() {
        $("#sortable").sortable({
            update: function(event, ui) {
                // Get the new order of the items
                var ids = $(this).sortable("toArray", {
                    attribute: "data-id"
                });
                // Send the new order to the server using Ajax
                $.ajax({
                    url: $("#SortForm").attr("action"),
                    method: "PUT",
                    data: {
                        id: ids
                    },
                    success: function(response) {},
                    error: function(xhr, status, error) {
                        console.error(error);
                    }
                });
            }
        });
    });
</script>
