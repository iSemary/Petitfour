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
                                <form method="POST" action="{{ route('login.submit') }}">
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
                                    <p>This is dashboard login credentials will be available soon.</p>
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
