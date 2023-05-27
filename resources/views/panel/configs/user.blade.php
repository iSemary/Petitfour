@extends('panel.layouts.app')
@section('title', __('User Config'))
@section('content')
    <section class="content">
        <div class="card card-success">
            <div class="card-header d-flex justify-content-between">
                <h3>User Config</h3>
            </div>
            <div class="card-body">
                <form action="{{ route('config.user.update') }}" method="POST" id="EditForm" enctype="multipart/form-data">
                    @csrf
                    {{ method_field('PUT') }}

                    <div class="row">
                        <div class="col-4 form-group">
                            <label for="first_name">First Name:</label>
                            <input type="text" name="first_name" class="form-control" id="first_name"
                                value="{{ $config->first_name }}" placeholder="First Name">
                        </div>

                        <div class="col-4 form-group">
                            <label for="last_name">Last Name:</label>
                            <input type="text" name="last_name" class="form-control" id="last_name"
                                value="{{ $config->last_name }}" placeholder="Last Name">
                        </div>

                        <div class="col-4 form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" id="email"
                                value="{{ $config->email }}" placeholder="Email">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 form-group">
                            <label for="country">Country:</label>
                            <input type="text" name="country" class="form-control" id="country"
                                value="{{ $config->country }}" placeholder="Country">
                        </div>

                        <div class="col-4 form-group">
                            <label for="city">City:</label>
                            <input type="text" name="city" class="form-control" id="city"
                                value="{{ $config->city }}" placeholder="City">
                        </div>

                        <div class="col-4 form-group">
                            <label for="phone_number">Phone Number:</label><br />
                            <input type="text" name="phone_number" style="width: 100%"
                                value="{{ '+' . ($config->country_code ?? '20') . $config->phone_number }}"
                                class="form-control" id="phone_number" placeholder="Phone Number">
                            <input type="hidden" name="country_code" id="country_code"
                                value="{{ $config->country_code ?? '20' }}">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 form-group">
                            <label for="address">Address:</label>
                            <input type="text" name="address" class="form-control" id="address"
                                value="{{ $config->address }}" placeholder="Address">
                        </div>
                        <div class="col-4 form-group">
                            <label for="position">Position:</label>
                            <input type="text" name="position" class="form-control" id="position"
                                value="{{ $config->position }}" placeholder="Position">
                        </div>
                        <div class="col-4 form-group">
                            <label for="slogan">Slogan:</label>
                            <input type="text" name="slogan" class="form-control" id="slogan"
                                value="{{ $config->slogan }}" placeholder="Slogan">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 form-group">
                            <label for="bio">Bio:</label>
                            <textarea name="bio" class="form-control" id="bio" placeholder="Bio">{{ $config->bio }}</textarea>
                        </div>
                        <div class="col-4 form-group">
                            <label for="home_image">Home Image:</label>
                            <input type="file" name="home_image" accept="image/*" class="form-control-file" id="home_image">
                            <img src="{{ isset($config->home_image) ? asset($config->home_image) : '' }}" class="img-thumbnail img-md d-block image-preview" alt="">
                        </div>
                        <div class="col-4 form-group">
                            <label for="home_image">Theme Home Image:</label>
                            <input type="file" name="theme_home_image" accept="image/*" class="form-control-file" id="theme_home_image">
                            <img src="{{ isset($config->theme_home_image) ? asset($config->theme_home_image) : '' }}" class="img-thumbnail img-md d-block image-preview" alt="">
                        </div>
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
    <script>
        var input = document.querySelector("#phone_number");
        var iti = window.intlTelInput(input, {
            utilsScript: `{{ asset('assets/panel/vendors/intlTelInput/utils.js') }}`,
            separateDialCode: true,
        });

        input.addEventListener("countrychange", function() {
            var selectedCountryData = iti.getSelectedCountryData();
            var countryCode = selectedCountryData.dialCode;
            $("#country_code").val(countryCode);
        });
    </script>
@endsection
