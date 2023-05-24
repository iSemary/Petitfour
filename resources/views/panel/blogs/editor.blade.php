<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">{{ isset($blog) ? "Edit blog #$blog->id" : 'Add new blog' }}</h3>
        </div>
        <div class="card-body">
            <form action="{{ isset($blog) ? route('blogs.update', $blog->id) : route('blogs.store') }}"
                id="{{ isset($blog) ? 'EditForm' : 'CreateForm' }}" method="POST">
                @csrf
                {{ isset($blog) ? method_field('PUT') : method_field('POST') }}
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="title"
                        value="{{ isset($blog) ? $blog->title : '' }}" placeholder="Title" required />
                </div>
                <div class="form-group">
                    <label>Slug</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="slug"
                        value="{{ isset($blog) ? $blog->slug : '' }}"id="blogSlug" placeholder="Slug" required />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" name="description" placeholder="Description" required>{{ isset($blog) ? $blog->description : '' }}</textarea>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea class="form-control" id="blogContent" name="content" placeholder="Content" required>{{ isset($blog) ? $blog->content : '' }}</textarea>
                </div>

                <div class="form-group">
                    <label>Published Date</label>
                    <input type="datetime-local" name="published_at"
                        value="{{ isset($blog) ? $blog->published_at : '' }}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Skills</label>
                    <select name="skill_id[]" style="width:100%" class="form-control select2" multiple required>
                        <option value="">Choose Skills</option>
                        @foreach ($skills as $skill)
                            <option value="{{ $skill->id }}" {{-- TODO fix this --}}
                                {{ isset($blog) && $blog->skills->contains($skill->id) ? 'selected' : '' }}>
                                {{ $skill->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Status</label>
                    <select name="status" style="width:100%" class="select2" required>
                        <option value="0" {{ isset($blog) && $blog->status == '0' ? 'selected' : '' }}>In active
                        </option>
                        <option value="1" {{ isset($blog) && $blog->status == '1' ? 'selected' : '' }}>Active
                        </option>
                        <option value="2" {{ isset($blog) && $blog->status == '2' ? 'selected' : '' }}>Publish on
                            date</option>
                    </select>
                </div>
                <div class="form-group d-flex justify-content-between">
                    <div>
                        <label>Image</label><br />
                        <input type="file" name="image" accept="image/*" id="uploadImg">
                    </div>
                    <img src="{{ isset($blog) ? asset($blog->image) : '' }}" class="img-thumbnail img-md d-block"
                        id="previewImg" alt="">
                </div>
                <div class="form-group">
                    <label class="{{ isset($blog) ? 'edit' : 'create' }}-status"></label>
                </div>
                <br />
                <div class="form-group">
                    <button type="submit" class="btn btn-{{ isset($blog) ? 'primary' : 'success' }}">
                        <i class="fas fa-save"></i>
                        {{ isset($blog) ? 'Update' : 'Add' }}</button>
                </div>
            </form>
        </div>
    </div>
</section>
<script src="{{ asset('assets/panel/vendors/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('assets/panel/vendors/ckeditor/config.js') }}"></script>

<script>
    CKEDITOR.replace('blogContent', {
        extraPlugins: 'codesnippet',
        codeSnippet_theme: 'monokai_sublime'
    });

    // Trigger input event
    $('#blogSlug').on('input', function() {
        var inputValue = $(this).val();
        var replacedValue = inputValue.replace(/\s+/g, '-');
        $(this).val(replacedValue);
    });
</script>
