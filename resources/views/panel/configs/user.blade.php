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
                            <input type="file" name="home_image" accept="image/*" class="form-control-file"
                                id="home_image">
                            <img src="{{ isset($config->home_image) ? asset($config->home_image) : asset('images/default.jpg') }}"
                                class="img-thumbnail img-md d-block image-preview" alt="">
                        </div>
                        <div class="col-4 form-group">
                            <label for="home_image">Theme Home Image:</label>
                            <input type="file" name="theme_home_image" accept="image/*" class="form-control-file"
                                id="theme_home_image">
                            <img src="{{ isset($config->theme_home_image) ? asset($config->theme_home_image) : asset('images/default.jpg') }}"
                                class="img-thumbnail img-md d-block image-preview" alt="">
                        </div>
                        <div class="col-4 form-group">
                            <label for="resume">Resume:</label>
                            <input type="file" name="resume" class="form-control-file" id="resume">
                            @if (isset($config->resume) && basename($config->resume) != 'config')
                                <a href="{{ $config->resume }}" class="btn btn-sm btn-primary mt-2"
                                    target="_blank">{{ basename($config->resume) }}</a>
                            @endif
                        </div>
                    </div>
                    <hr>
                    <h5>Social Links</h5>
                    @php
                        $urlOptions = ['Select type', 'LinkedIn', 'Github', 'Behance', 'Facebook', 'Mail', 'Instagram', 'Twitter', 'Stack over flow'];
                    @endphp
                    <div>
                        <div class="row">
                            <div class="col-4 form-group">
                                <input type="hidden" name="social_link_id[]" value="0">
                                <label>Type</label><br />
                                <select name="type[0]" style="width:100%" class="select2">
                                    @foreach ($urlOptions as $key => $urlOption)
                                        <option value="{{ $key }}">{{ $urlOption }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-4 form-group">
                                <label>URL</label>
                                <input type="text" name="url[0]" placeholder="URL" class="form-control"
                                    id="url">
                            </div>
                            <div class="col-4 form-group">
                                <label>Priority</label>
                                <input type="text" name="priority[0]" placeholder="Priority" class="form-control"
                                    id="url">
                            </div>
                        </div>

                        {{-- Old Links --}}
                        @foreach ($socialLinks as $key => $socialLink)
                            <hr />
                            <div class="row">
                                <div class="col-4 form-group">
                                    <input type="hidden" name="social_link_id[]" value="{{ $socialLink->id }}">
                                    <label>Type</label><br />
                                    <select name="type[{{ $socialLink->id }}]" style="width:100%" class="select2">
                                        @foreach ($urlOptions as $i => $urlOption)
                                            <option value="{{ $i }}"
                                                {{ $i == $socialLink->type ? 'selected' : '' }}>{{ $urlOption }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-4 form-group">
                                    <label>URL</label>
                                    <input type="text" name="url[{{ $socialLink->id }}]"
                                        value="{{ $socialLink->url }}" placeholder="URL" class="form-control"
                                        id="url">
                                </div>
                                <div class="col-4 form-group">
                                    <label>Priority</label>
                                    <input type="text" name="priority[{{ $socialLink->id }}]"
                                        value="{{ $socialLink->priority }}" placeholder="Priority" class="form-control"
                                        id="url">
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <hr>
                    <div class="main-container">
                        <h5>
                            Features
                            <button class="btn btn-primary duplicate-btn" type="button">Add more</button>
                        </h5>
                        <div class="row form-group main-content">
                            <div class="col-md-3 form-group">
                                <label>Title</label>
                                <input type="hidden" name="feature_id[]" value="0">
                                <input name="feature_title[0]" type="text" placeholder="Title" class="form-control" />
                            </div>
                            <div class="col-md-3 form-group">
                                <label>Description</label>
                                <input name="feature_description[0]" type="text" placeholder="Description"
                                    class="form-control" />
                            </div>
                            <div class="col-md-3 form-group">
                                <label>Image</label>
                                <input name="feature_image[0]" type="file" class="form-control form-control-file" />
                            </div>
                            <div class="col-md-3">
                                <img src="{{ asset('images/default.jpg') }}" class="image-preview"
                                    alt="Feature Image 1" />
                            </div>
                        </div>
                        @foreach ($features as $feature)
                            <div class="row form-group main-content">
                                <div class="col-md-3 form-group">
                                    <label>Title</label>
                                    <input type="hidden" name="feature_id[]" value="{{ $feature->id }}">
                                    <input name="feature_title[{{ $feature->id }}]" value="{{ $feature->title }}" type="text" placeholder="Title"
                                        class="form-control" />
                                </div>
                                <div class="col-md-3 form-group">
                                    <label>Description</label>
                                    <input name="feature_description[{{ $feature->id }}]" value="{{ $feature->description }}" type="text" placeholder="Description"
                                        class="form-control" />
                                </div>
                                <div class="col-md-3 form-group">
                                    <label>Image</label>
                                    <input name="feature_image[{{ $feature->id }}]" type="file"
                                        class="form-control form-control-file" />
                                </div>
                                <div class="col-md-3">
                                    <img src="{{ isset($feature->image) ? asset($feature->image) : asset('images/default.jpg') }}" class="image-preview"
                                        alt="Feature Image 1" />
                                </div>
                            </div>
                        @endforeach
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
