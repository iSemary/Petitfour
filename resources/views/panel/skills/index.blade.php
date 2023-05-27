@extends('panel.layouts.app')
@section('title', __('Skills'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Skills</h3>
                <a href="#" data-url={{ route('skills.create') }} class="btn btn-primary create-btn">
                    <i class="fas fa-plus"></i> Add new skill
                </a>
            </div>
            <div class="card-body">

                <table id="skills-table" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Icon</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#skills-table').DataTable({
                order: [
                    [0, 'desc']
                ],
                processing: true,
                serverSide: true,
                url: `{{ route('skills.index') }}`,
                columns: [{
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'category_name',
                        name: 'category_name'
                    },
                    {
                        data: 'type',
                        name: 'type'
                    },
                    {
                        data: 'priority',
                        name: 'priority'
                    },
                    {
                        data: 'icon',
                        name: 'icon'
                    },
                    {
                        data: 'start_date',
                        name: 'start_date'
                    },
                    {
                        data: 'action',
                        name: 'action',
                        orderable: false,
                        searchable: false,
                    },
                ]
            });
        });
    </script>
@endsection
