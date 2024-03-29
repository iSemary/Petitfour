<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">{{ isset($experience) ? "Edit experience #$experience->id" : 'Add new experience' }}
            </h3>
        </div>
        <div class="card-body">
            <form action="{{ isset($experience) ? route('experiences.update', $experience->id) : route('experiences.store') }}"
                id="{{ isset($experience) ? 'EditForm' : 'CreateForm' }}" method="POST">
                @csrf
                {{ isset($experience) ? method_field('PUT') : method_field('POST') }}
                <div class="form-group">
                    <label>Company Name</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="company_name"
                        value="{{ isset($experience) ? $experience->company_name : '' }}" placeholder="Company Name" required />
                </div>
                <div class="form-group">
                    <label>Company Location</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="company_location"
                        value="{{ isset($experience) ? $experience->company_location : '' }}" placeholder="Company Location"
                        required />
                </div>
                <div class="form-group">
                    <label>Position Title</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="position_title"
                        value="{{ isset($experience) ? $experience->position_title : '' }}" placeholder="Position Title"
                        required />
                </div>
                <div class="form-group">
                    <label>Summary</label>
                    <textarea class="form-control" name="summary" placeholder="Summary" required>{{ isset($experience) ? $experience->summary : '' }}</textarea>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea class="form-control" id="experienceContent" name="content" placeholder="Content" required>{{ isset($experience) ? $experience->content : '' }}</textarea>
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" name="start_date"
                        value="{{ isset($experience) ? $experience->start_date : '' }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" name="end_date"
                        value="{{ isset($experience) ? $experience->end_date : null }}" class="form-control">
                </div>
                <div class="form-group">
                    <label>Skills</label>
                    <select name="skill_id[]" style="width:100%" class="form-control select2" multiple required>
                        <option value="">Choose Skills</option>
                        @foreach ($skills as $skill)
                            <option value="{{ $skill->id }}"
                                {{ isset($experience) && $experience->skills->contains($skill->id) ? 'selected' : '' }}>
                                {{ $skill->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group d-flex justify-content-between">
                    <div>
                        <label>Company Logo</label><br />
                        <input type="file" name="company_logo" accept="image/*" id="uploadImg">
                    </div>
                    <img src="{{ isset($experience) ? asset($experience->company_logo) : asset('images/default.jpg') }}"
                        class="img-thumbnail img-md d-block" id="previewImg" alt="">
                </div>
                <div class="form-group">
                    <label class="{{ isset($experience) ? 'edit' : 'create' }}-status"></label>
                </div>
                <br />
                <div class="form-group">
                    <button type="submit" class="text-white btn btn-{{ isset($experience) ? 'primary' : 'success' }}">
                        <i class="fas fa-save"></i>
                        {{ isset($experience) ? 'Update' : 'Add' }}</button>
                </div>
            </form>
        </div>
    </div>
</section>
<script src="{{ asset('assets/panel/vendors/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('assets/panel/vendors/ckeditor/config.js') }}"></script>

<script>
    CKEDITOR.replace('experienceContent', {
        extraPlugins: 'codesnippet',
        codeSnippet_theme: 'monokai_sublime'
    });
</script>