@extends('panel.layouts.app')
@section('title', __('Dashboard'))
@section('content')
    <section class="content">
        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-primary">
                    <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fs-4 fw-semibold">{{ $skills }}</div>
                            <div>Skills</div>
                        </div>
                    </div>
                    <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                        <i class="fas fa-fill-drip" style="font-size: 60px;color: #ffffff59;"></i>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-info">
                    <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fs-4 fw-semibold">{{ $projects }}</div>
                            <div>Projects</div>
                        </div>
                    </div>
                    <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                        <i class="fas fa-laptop-code" style="font-size: 60px;color: #ffffff59;"></i>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-warning">
                    <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fs-4 fw-semibold">{{ $experiences }}</div>
                            <div>Experiences</div>
                        </div>
                    </div>
                    <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                        <i class="fas fa-briefcase" style="font-size: 60px;color: #ffffff59;"></i>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-danger">
                    <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fs-4 fw-semibold">{{ $blogs }}</div>
                            <div>Blogs</div>
                        </div>
                    </div>
                    <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
                        <i class="fas fa-rss" style="font-size: 60px;color: #ffffff59;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <button class="create-btn btn btn-primary" data-url="" type="button"><i class="fas fa-sort-amount-down"></i> Sort Skills</button>
                <button class="create-btn btn btn-primary" data-url="" type="button"><i class="fas fa-sort-amount-down"></i> Sort Projects</button>
            </div>
            <div class="col-6">
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script></script>
@endsection
