<script>
export default {
	data() {
		return {
			inputWord: '',
		};
	},
	emits: ['submitted'],
};
</script>

<template>
	<header>
		<div class="container-header">
			<!-- Logo -->
			<div class="logo">Boolflix</div>
			<!-- Search Form -->
			<form @submit.prevent="$emit('submitted', inputWord)" class="buttons-search">
				<input v-model="inputWord" type="search" placeholder="Cerca un film o una serie tv...."
					class="form-control" />
				<button type="submit" class="btn btn-primary">Cerca</button>
			</form>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	background-color: #383838;
	width: 100%;
	padding: 20px 0;
	border-bottom: 1px solid black;
}

.container-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
	width: 100%;
}

.logo {
	text-transform: uppercase;
	font-size: 40px;
	margin-left: 20px;
	color: red;
}

.buttons-search {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.buttons-search input {
	width: 250px;
	padding: 10px;
	border-radius: 5px;
	border: none;
}

.buttons-search button {
	margin-left: 20px;
	padding: 10px 40px;
	border: none;
	color: white;
	background-color: red;
}
</style>
