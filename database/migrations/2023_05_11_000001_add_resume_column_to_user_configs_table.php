<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddResumeColumnToUserConfigsTable extends Migration {
    /**
     * Run the migration.
     *
     * @return void
     */
    public function up() {
        Schema::table('user_configs', function (Blueprint $table) {
            $table->string('resume', 255)->nullable()->after('theme_home_image');
        });
    }

    /**
     * Reverse the migration.
     *
     * @return void
     */
    public function down() {
        Schema::table('user_configs', function (Blueprint $table) {
            $table->dropColumn('resume');
        });
    }
}
