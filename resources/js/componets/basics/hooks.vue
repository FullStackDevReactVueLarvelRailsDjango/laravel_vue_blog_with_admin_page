<template>	
	<div>
		<h2>this is hook {{ name }}</h2>
		<input type="text" v-model="nickname" />
		<button type="button" @click="getData">click</button>
		<button type="button" @click="setData">click</button>
	</div>
</template>

<script>
export default {
	data(){
		return{
			name:'RIM',
			nickname:"nickname",
		};
	},

	methods:{
		getData(){
			alert(this.nickname);
		},
		setData(){
			this.nickname = 12345;
		}
	},
	
	beforeCreate(){
			console.log('beforcreated');
		},
		created(){
			console.log('created');
		},
		beforeMount(){
			console.log('beforeMounted');

		},
		mounted(){
			console.log('mounted');

		},
		beforeUpdate(){
			console.log('beforeUpdated');
		},
		updated(){
			console.log('Updated');
		},
		beforDestroy(){
			console.log("beforeDestroyed");
		},
		destroyed(){
			console.log('destroyed');
		}
}


		

</script>