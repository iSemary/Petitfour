@extends('panel.layouts.app')
@section('title', __('Dashboard'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>Skills</h3>
                <a href="#" data-url={{ route('skills.create') }} class="btn btn-primary create-btn">
                </a>
            </div>
            <div class="card-body">
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script></script>
@endsection
