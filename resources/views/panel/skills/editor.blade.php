<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">{{ isset($skill) ? "Edit skill #$skill->id" : 'Add new skill' }}</h3>
        </div>
        <div class="card-body">
            <form action="{{ isset($skill) ? route('skills.update', $skill->id) : route('skills.store') }}"
                id="{{ isset($skill) ? 'EditForm' : 'CreateForm' }}" method="POST">
                @csrf
                {{ isset($skill) ? method_field('PUT') : method_field('POST') }}
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="name"
                        value="{{ isset($skill) ? $skill->name : '' }}" placeholder="Name" required />
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" name="start_date" value="{{ isset($skill) ? $skill->start_date : '' }}"
                        class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <select name="category_id" style="width:100%" class="form-control select2">
                        <option value="">Choose Category</option>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}"
                                {{ isset($skill) && $skill->category_id == $category->id ? 'selected' : '' }}>
                                {{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Skill Type</label>
                    <select name="type" style="width:100%" class="form-control select2" required>
                        <option value="1" {{ isset($skill) && $skill->type == '1' ? 'selected' : '' }}>Main Skill
                        </option>
                        <option value="0" {{ isset($skill) && $skill->type == '0' ? 'selected' : '' }}>Additional Skill
                        </option>
                        <option value="2" {{ isset($skill) && $skill->type == '2' ? 'selected' : '' }}>Side Skill
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <input type="number" minlength="1" maxlength="60" class="form-control" name="priority"
                        value="{{ isset($skill) ? $skill->priority : '0' }}" placeholder="Priority" required />
                </div>
                <div class="form-group">
                    <label>Color Code</label>
                    <input type="color" name="color_code" value="{{ isset($skill) ? $skill->color_code : "" }}" class="form-control">
                </div>
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" {{ isset($skill) && $skill->highlight == 1 ? "checked" :"" }} name="highlight" id="toggleSwitch">
                        <label class="custom-control-label" for="toggleSwitch">Highlight</label>
                    </div>
                </div>
                <div class="form-group d-flex justify-content-between">
                    <div>
                        <label>Icon</label><br />
                        <input type="file" name="icon" accept="image/*" id="uploadImg">
                    </div>
                    <img src="{{ isset($skill) ? asset($skill->icon) : asset('images/default.jpg') }}"
                        class="img-thumbnail img-md d-block" id="previewImg" alt="">
                </div>
                <div class="form-group">
                    <label class="{{ isset($skill) ? 'edit' : 'create' }}-status"></label>
                </div>
                <br />
                <div class="form-group">
                    <button type="submit" class="text-white btn btn-{{ isset($skill) ? 'primary' : 'success' }}">
                        <i class="fas fa-save"></i>
                        {{ isset($skill) ? 'Update' : 'Add' }}</button>
                </div>
            </form>
        </div>
    </div>
</section>
