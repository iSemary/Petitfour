<div class="form-group">
    <div class="">
    
    </div>
    <div class="form-group">
        <div class="form-group">
            <label for="filterFromDate">@lang('from_date')</label>
            <input type="datetime-local" class="form-control" name="filter_from_date" id="filterFromDate" 
            required>
        </div>
        <div class="form-group">
            <label for="filterToDate">@lang('to_date')</label>
            <input type="datetime-local" class="form-control" name="filter_to_date" id="filterToDate" 
            required>
        </div>
        <div class="form-group">
            <button class="btn btn-info" type="button" id="filterTable">@lang('filter')</button>
        </div>
    </div>
</div>