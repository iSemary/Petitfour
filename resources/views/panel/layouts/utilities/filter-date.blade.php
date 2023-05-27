<div class="col-md-8">
    <form method="GET" id="filterTable" class="row">
        <div class="form-group col-4">
            <label for=""><i class="fas fa-calendar-alt"></i> @lang('from_date')</label>
            <input class="form-control" name="from_date" id="from_date" type="datetime-local" value="{{ date('Y-m-d H:i:s') }}" required />
        </div>
        <div class="form-group col-4">
            <label for=""><i class="far fa-calendar-alt"></i> @lang('to_date')</label>
            <input class="form-control" name="to_date" id="to_date" type="datetime-local" value="{{ date('Y-m-d H:i:s') }}" required />
        </div>

        <div class="form-group col-4 mt-4">
            <button class="btn btn-info mt-2" type="submit"><i class="fas fa-filter"></i> @lang('filter_search')</button>
        </div>
    </form>
</div>