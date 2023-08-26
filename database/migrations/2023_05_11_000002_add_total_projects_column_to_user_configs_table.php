<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTotalProjectsColumnToUserConfigsTable extends Migration {
    /**
     * Run the migration.
     *
     * @return void
     */
    public function up() {
        Schema::table('user_configs', function (Blueprint $table) {
            $table->integer('total_projects')->default(0)->after('resume');
        });
    }

    /**
     * Reverse the migration.
     *
     * @return void
     */
    public function down() {
        Schema::table('user_configs', function (Blueprint $table) {
            $table->dropColumn('total_projects');
        });
    }
}
