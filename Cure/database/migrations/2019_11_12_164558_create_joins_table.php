<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('joins', function (Blueprint $table) {
            $table->bigIncrements('id');
	    $table->string("contentTypeID") -> nullable();
	    $table->string("contentID");
	    $table->string("userID");
	    $table->string("title");
	    $table->string("xmap");
	    $table->string("ymap");
	    $table->string("kinds");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('joins');
    }
}
