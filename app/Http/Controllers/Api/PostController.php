<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "status" => 1,
            "data" => Post::get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'body' => 'required',
        ]);

        $post = new Post();
        $post->name = $request->name;
        $post->body = $request->body;
        $post->user_id = auth()->user()->id;
        $post->save();

        return response()->json([
            "status" => 1,
            "msg" => "Post create success!",
            "data" => $post
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json([
            "status" => 1,
            "data" => Post::where('id', $id)->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'body' => 'required',
        ]);

        $post = Post::where('id', $id)->first();
        if ( isset($post->id) ) {
            if ($post->user_id === auth()->user()->id) {
                $post->name = $request->name;
                $post->body = $request->body;
                $post->save();

                return response()->json([
                    "status" => 1,
                    "msg" => "Post update success!",
                    "data" => $post
                ]);
            } else {
                return response()->json([
                    "status" => 0,
                    "msg" => "User can't edit this post!"
                ]);
            }
        } else {
            return response()->json([
                "status" => 0,
                "msg" => "Post not exist!"
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Post::where('id', $id)->delete();

        return response()->json([
            "status" => 1,
            "msg" => "Post delete success!"
        ]);
    }
}
