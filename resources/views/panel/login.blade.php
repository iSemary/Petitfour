@extends('panel.layouts.app')
@section('title', __('Login'))
@section('content')
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card-group d-block d-md-flex row">
                        <div class="card col-md-7 p-4 mb-0">
                            <div class="card-body">
                                <form method="POST" id="loginForm" action="{{ route('login.submit') }}">
                                    @csrf
                                    {{ method_field('POST') }}
                                    <h1>Login</h1>
                                    <p class="text-medium-emphasis">Sign In to your account</p>
                                    <div class="input-group mb-3"><span class="input-group-text">
                                            <i class="far fa-envelope"></i></span>
                                        <input class="form-control" name="email" id="usernameField" type="text"
                                            placeholder="Email Address">
                                    </div>
                                    <div class="input-group mb-4"><span class="input-group-text"><i
                                                class="fas fa-lock"></i></span>
                                        <input class="form-control" name="password" id="passwordField" type="password"
                                            placeholder="Password">
                                    </div>
                                    <div class="create-status">

                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-primary px-4" type="submit">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card col-md-5 text-white bg-primary py-5">
                            <div class="card-body text-center">
                                <div>
                                    <h2>{{ env('APP_NAME') }}</h2>
                                    <p>Dashboard login credentials will be available soon. [For test uses]</p>
                                    <a class="btn btn-lg btn-outline-light mt-3" target="_blank"
                                        href="https://github.com/isemary/petitfour">Build your own project!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        // Use jQuery or any other library to handle AJAX requests
        $(document).ready(function() {
            $(document).on("submit", "#loginForm", function(e) {
                e.preventDefault();
                let formBtn = $(this).find(":submit");
                let formData = new FormData(this);
                let formID = "#" + $(this).attr("id");
                let formUrl = $(this).attr("action");

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: formUrl,
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: function() {
                        $(".create-status").html(
                            `<h6 class="text-muted"><i class="fas fa-circle-notch fa-spin"></i> Signing in, please wait...</h6>`
                        );
                        formBtn.prop("disabled", true);
                    },
                    success: function(data) {
                        $(".create-status").html(
                            `<h6 class="text-success"><i class="fas fa-check-circle"></i>`+data.message+`</h6>`
                        );
                        window.location.href = data.route
                    },
                    error: function(data) {
                        $(".create-status").html("");
                        formBtn.prop("disabled", false);
                        $(".create-status").append(
                            `<h6 class="text-danger"><i class="fas fa-exclamation-triangle"></i> ` +
                            data.message +
                            `</h6>`
                        );
                        formBtn.prop("disabled", false);
                    },
                });
            });

        });
    </script>
@endsection
