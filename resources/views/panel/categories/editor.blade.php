<section class="content">
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title">{{ isset($category) ? "Edit category #$category->id" : 'Add new category' }}</h3>
        </div>
        <div class="card-body">
            <form action="{{ isset($category) ? route('categories.update', $category->id) : route('categories.store') }}"
                id="{{ isset($category) ? 'EditForm' : 'CreateForm' }}" method="POST">
                @csrf
                {{ isset($category) ? method_field('PUT') : method_field('POST') }}
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="name"
                        value="{{ isset($category) ? $category->name : '' }}" placeholder="Name" required />
                </div>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" minlength="1" maxlength="225" class="form-control" name="title"
                        value="{{ isset($category) ? $category->title : '' }}" placeholder="Title" required />
                </div>
                <div class="form-group">
                    <textarea name="description" class="form-control">{{ isset($category) ? $category->description : '' }}</textarea>
                </div>
                <div class="form-group">
                    <label>Category Type</label>
                    <select name="type" style="width:100%" class="form-control select2" required>
                        <option value="1" {{ isset($category) && $category->type == '1' ? 'selected' : '' }}>Main Category
                        </option>
                        <option value="0" {{ isset($category) && $category->type == '0' ? 'selected' : '' }}>Side Category
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <input type="number" class="form-control" name="priority"
                        value="{{ isset($category) ? $category->priority : '' }}" placeholder="Priority" required />
                </div>
                <div class="form-group">
                    <label class="{{ isset($category) ? 'edit' : 'create' }}-status"></label>
                </div>
                <br />
                <div class="form-group">
                    <button type="submit" class="text-white btn btn-{{ isset($category) ? 'primary' : 'success' }}">
                        <i class="fas fa-save"></i>
                        {{ isset($category) ? 'Update' : 'Add' }}</button>
                </div>
            </form>
        </div>
    </div>
</section>
