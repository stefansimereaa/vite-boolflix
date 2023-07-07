<script>
export default {
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
        overview: String,
        img: String,
    },
    computed: {
        // Controllo dell'URL della bandiera in base alla lingua originale del film
        flagUrl() {
            const url = new URL(`../assets/img/${this.originalLanguage}.png`, import.meta.url);
            const lang = this.originalLanguage;
            return lang === 'it' || lang === 'en' ? url.href : null;
        },
    },
    methods: {
        // Controllo della classe dell'icona in base al voto
        iconClass(n) {
            return n <= this.vote ? 'fas' : 'far';
        }
    }
};
</script>

<template>
    <div class="card">
        <ul class="card-list">
            <li class="card-item">
                <div class="card-image">
                    <!-- Card immagine -->
                    <img :src="img" :alt="title" onerror="this.style.display='none'" />
                </div>
                <div class="card-overlay">
                    <p><strong>Nome opera:</strong> {{ title }}</p>
                    <p><strong>Nome opera originale:</strong> {{ originalTitle }}</p>

                    <!-- Lingua originale e flag -->
                    <div class="original-language">
                        <strong>Lingua originale: </strong>
                        <img v-if="flagUrl" :src="flagUrl" :alt="originalLanguage" />
                        <span v-else>{{ originalLanguage.toUpperCase() }}</span>
                    </div>
                    <!-- Card Rating -->
                    <p class="rating">
                        <strong>Rating:</strong>
                        <font-awesome-icon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
                    </p>
                    <!-- Card Trama -->
                    <div class="overview-container">
                        <p><strong>Trama:</strong> {{ overview }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

//Card style
.card {
    cursor: pointer;
    margin-bottom: 30px;
    position: relative;
    width: 300px;
    margin-bottom: 30px;

    // Overlay section card
    &:hover .overlay {
        display: block;
    }

    .card-list {
        display: flex;
        list-style: none;
        padding: 0;

        .card-item {
            width: 300px;
            background-color: #989898;
            background-image: url('../assets/img/moviebackground.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;

            .card-image {
                position: relative;
                z-index: 1;
                height: 0;
                padding-top: 150%;
                overflow: hidden;

                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .card-overlay {
                display: none;
                position: absolute;
                inset: 0;
                color: white;
                background-color: rgba(0, 0, 0, 1);
                z-index: 2;
                font-size: 14px;
                padding: 10px 5px;

                p {
                    margin: 14px 0px;
                }

                strong {
                    font-size: 18px;
                }

                .overview-container {
                    max-height: 200px;
                    overflow: auto;
                }
            }

            &:hover .card-overlay {
                display: block;
            }
        }
    }

    // Language section Card
    .original-language {
        display: flex;
        align-items: center;

        img {
            width: 20px;
            height: auto;
            border-radius: 2px;
            margin-left: 0.25rem;
        }
    }

    // Rating section Card
    .rating {
        display: flex;
        align-items: center;

        strong {
            margin-right: 10px;
        }
    }
}
</style>











