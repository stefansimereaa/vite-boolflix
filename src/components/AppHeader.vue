<script>

</script>

<template>
    <header>
        <div class="container-header">
            <div class="logo">Boolflix</div>
            <div class="buttons">
                <input placeholder="Titoli, persone, genere" />
                <button class="btn btn-primary">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #383838;
    width: 100%;
    padding: 20px 0;
    border: 2px solid red;
}

.container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    width: 100%;
    border: 2px solid green;
}

.logo {
    text-transform: uppercase;
    font-size: 40px;
    margin-left: 20px;
    color: red;
}

.buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.buttons input {
    width: 250px;
    padding: 10px;
    border-radius: 5px;
}

.buttons button {
    margin-left: 20px;
    padding: 10px 40px;
    color: white;
}
</style>
