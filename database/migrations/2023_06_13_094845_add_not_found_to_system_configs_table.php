<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('system_configs', function (Blueprint $table) {
            $table->string('not_found_image', 255)->nullable()->after('contact_theme_image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('system_configs', function (Blueprint $table) {
            $table->dropColumn('not_found_image');
        });
    }
};
