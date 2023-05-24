@extends('panel.layouts.app')
@section('title', __('Blogs'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Blogs</h3>
                <a href="#" data-url={{ route('blogs.create') }} class="btn btn-primary create-btn">
                    <i class="fas fa-plus"></i> Add new blog
                </a>
            </div>
            <div class="card-body">

                <table id="skills-table" class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Published Date</th>
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
                url: `{{ route('blogs.index') }}`,
                columns: [{
                        data: 'id',
                        name: 'id'
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
                        data: 'published_at',
                        name: 'published_at'
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
