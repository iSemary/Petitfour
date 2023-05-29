<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">{{ isset($project) ? "Edit project #$project->id" : 'Add new project' }}
            </h3>
        </div>
        <div class="card-body">
            <form action="{{ isset($project) ? route('projects.update', $project->id) : route('projects.store') }}"
                id="{{ isset($project) ? 'EditForm' : 'CreateForm' }}" method="POST" enctype="multipart/form-data">
                @csrf
                {{ isset($project) ? method_field('PUT') : method_field('POST') }}
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="name"
                        value="{{ isset($project) ? $project->name : '' }}" placeholder="Name" required />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="description"
                        value="{{ isset($project) ? $project->description : '' }}" placeholder="Description" required />
                </div>
                <div class="form-group">
                    <label>Repository Link</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="repository_link"
                        value="{{ isset($project) ? $project->repository_link : '' }}" placeholder="Repository link" />
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <input type="number" minlength="1" maxlength="100" class="form-control" name="priority"
                        value="{{ isset($project) ? $project->priority : '' }}" placeholder="Priority" />
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" name="start_date" value="{{ isset($project) ? $project->start_date : '' }}"
                        class="form-control" required>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" name="end_date" value="{{ isset($project) ? $project->end_date : '' }}"
                        class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Skills</label>
                    <select name="skill_id[]" style="width:100%" class="form-control select2" multiple required>
                        <option value="">Choose Skills</option>
                        @foreach ($skills as $skill)
                            <option value="{{ $skill->id }}"
                                {{ isset($project) && $project->skills->contains($skill->id) ? 'selected' : '' }}>
                                {{ $skill->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Type</label>
                    <select name="type" style="width:100%" class="select2" required>
                        <option value="1" {{ isset($project) && $project->type == '1' ? 'selected' : '' }}>
                            Personal</option>
                        <option value="2" {{ isset($project) && $project->type == '2' ? 'selected' : '' }}>Client
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Tags</label></br>
                    <input name="tags" style="width: 100%" value="{{ isset($project) ? $project->tags : '' }}"
                        id="tags">
                </div>
                <div class="form-group">
                    <div>
                        <label>Images</label><br/>  
                        <small><b>Please note that when you upload images, It will be uploaded into 2 folders <code>storage/projects/</code> and <code>storage/projects/mocked/</code> which the mocked folder contains the uploaded image with laptop mockup </b></small>
                        <br/><br />
                        <input type="file" name="images[]" id="images" accept="image/*" multiple>
                    </div>
                </div>
                @if (isset($project))
                    <div class="row">
                        @foreach ($project->images as $image)
                            <div class="col-md-3">
                                <img src="{{ $image->project_image }}" class="image-uploaded-preview" width="150px" height="150px" alt="">
                            </div>
                        @endforeach
                    </div>
                @endif
                <div class="form-group">
                    <label class="{{ isset($project) ? 'edit' : 'create' }}-status"></label>
                </div>
                <br />
                <div class="form-group">
                    <button type="submit" class="text-white btn btn-{{ isset($project) ? 'primary' : 'success' }}">
                        <i class="fas fa-save"></i>
                        {{ isset($project) ? 'Update' : 'Add' }}</button>
                </div>
            </form>
        </div>
    </div>
</section>
<link rel="stylesheet" href="{{ asset('assets/panel/vendors/tagify/tagify.min.css') }}">
<script src="{{ asset('assets/panel/vendors/tagify/tagify.min.js') }}"></script>
<script>
    $(document).ready(function() {
        var input = document.querySelector("input[name='tags'");
        new Tagify(input);


        $("input[name='images[]']").imageuploadify();
    })
</script>
