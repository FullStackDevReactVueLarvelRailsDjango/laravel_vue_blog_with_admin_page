<template>
    <div>
        <h1>the number is: {{ counter }}</h1>
        <button @click="updateCounter(3)">Increase</button>
        <button @click="updateCounter(-3)">Decrease</button>
        <div v-for="(blog, i) in blogs" :key="i">
					<h1>{{ blog.title }}</h1>
					<h2>{{ blog.post }}</h2>
				</div>

				<div>
					<h1 v-if="showFlag">this is the show item</h1>
					<h1 v-else>this is the hidden item</h1>
				</div>
				<button @click="changeShow">changeshow</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 50,
            blogs: [],
						showFlag: true,
        };
    },
    methods: {
        updateCounter(num) {
           this.counter += num;
        },
				changeShow(){
					this.showFlag? this.showFlag=false:this.showFlag=true;
				}
    },

    created() {
        this.counter = 100;
        //get the blog posts
        let posts = [
            {
                title: "this is blog tilte1",
                post: "this is the blog post1",
                id: 1
            },
            {
                title: "this is blog tilte2",
                post: "this is the blog post2",
                id: 2
            },
            {
                title: "this is blog tilte3",
                post: "this is the blog post3",
                id: 3
            },
            {
                title: "this is blog tilte4",
                post: "this is the blog post4",
                id: 4
            }
        ];
				this.blogs=posts;
    }
};
</script>
