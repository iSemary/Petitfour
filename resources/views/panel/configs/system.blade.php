@extends('panel.layouts.app')
@section('title', __('System Config'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>System Config</h3>
            </div>
            <div class="card-body">
                <form action="{{ route('config.system.update') }}" method="POST" id="EditForm" enctype="multipart/form-data">
                    @csrf
                    {{ method_field('PUT') }}
                    <div class="form-group">
                        <label for="primaryColor">Primary Color:</label>
                        <input type="color" name="primary_color" value="{{ $config->primary_color }}" class="form-control"
                            id="primaryColor" placeholder="Primary color">
                    </div>
                    <div class="form-group">
                        <label for="secondaryColor">Secondary Color:</label>
                        <input type="color" name="secondary_color" value="{{ $config->secondary_color }}"
                            class="form-control" id="secondaryColor" placeholder="Secondary color">
                    </div>
                    <div class="form-group">
                        <label for="contactEmail">Contact Email:</label>
                        <input type="email" name="contact_email" value="{{ $config->contact_email }}" class="form-control"
                            id="contactEmail" placeholder="Contact email">
                    </div>
                    <div class="form-group">
                        <label for="openaiApiToken">OpenAI API Token:</label>
                        <input type="text" name="openai_api_token" value="{{ $config->openai_api_token }}"
                            class="form-control" id="openaiApiToken" placeholder="OpenAI API token">
                    </div>
                    <div class="form-group">
                        <label for="googleAnalyticsId">Google Analytics ID:</label>
                        <input type="text" name="google_analytics_id" value="{{ $config->google_analytics_id }}"
                            class="form-control" id="googleAnalyticsId" placeholder="Google Analytics ID">
                    </div>
                    <div class="form-group">
                        <label class="edit-status"></label>
                    </div>
                    <br />
                    <div class="form-group">
                        <button type="submit" class="btn btn-warning text-white">
                            <i class="fas fa-save"></i> Save
                        </button>
                </form>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
@endsection
