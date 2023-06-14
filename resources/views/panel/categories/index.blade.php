@extends('panel.layouts.app')
@section('title', __('Categories'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Categories</h3>
                <a href="#" data-url={{ route('categories.create') }} class="btn btn-primary create-btn">
                    <i class="fas fa-plus"></i> Add new category
                </a>
            </div>
            <div class="card-body">

                <table id="categories-table" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Skills Count</th>
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
            $('#categories-table').DataTable({
                order: [
                    [0, 'desc']
                ],
                processing: true,
                serverSide: true,
                url: `{{ route('categories.index') }}`,
                columns: [{
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'title',
                        name: 'title'
                    },
                    {
                        data: 'description',
                        name: 'description'
                    },
                    {
                        data: 'skills_count',
                        name: 'skills_count'
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
