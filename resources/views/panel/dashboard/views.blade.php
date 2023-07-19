@extends('panel.layouts.app')
@section('title', __('View Counts'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Views</h3>
            </div>
            <div class="card-body">

                <table id="skills-table" class="text-center table table-striped">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Count</th>
                            <th>Last view</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($viewTypes as $viewType)
                            <tr>
                                <td>{{ $viewType->type }}</td>
                                <td>
                                    {{ $viewType->counter }}<br/>
                                    <strong>Grouped : {{ $viewType->count_group_by_ip }}</strong>
                                </td>
                                <td>{{ $viewType->created_at }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#views-table').DataTable({});
        });
    </script>
@endsection
