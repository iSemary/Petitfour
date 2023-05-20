@extends('panel.layouts.app')
@section('title', __('Skills'))
@section('content')
    <h1>Skills</h1>
    <table id="skills-table" class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category ID</th>
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
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#skills-table').DataTable({
                processing: true,
                serverSide: true,
                columns: [{
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'category_id',
                        name: 'category_id'
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
                        data: 'actions',
                        name: 'actions',
                        orderable: false,
                        searchable: false,
                        width: '100px',
                    },
                ]
            });
        });
    </script>
@endsection
