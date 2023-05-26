@extends('panel.layouts.app')
@section('title', __('Projects'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Projects</h3>
                <a href="#" data-url={{ route('projects.create') }} class="btn btn-primary create-btn">
                    <i class="fas fa-plus"></i> Add new project
                </a>
            </div>
            <div class="card-body">
                <table id="projects-table" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Priority</th>
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
            $('#projects-table').DataTable({
                order: [
                    [0, 'desc']
                ],
                processing: true,
                serverSide: true,
                url: `{{ route('projects.index') }}`,
                columns: [{
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'description',
                        name: 'description'
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
