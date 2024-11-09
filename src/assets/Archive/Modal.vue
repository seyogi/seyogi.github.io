<template>
    <div id="modal">
        <div id="modal-content" class="modal">
            <div>
                <div id="modal-message" class="modal__message">
                    <img class="img" :src="message.imgurl" />
                    <h3>
                        Title：{{ message.title }}<br>
                    </h3>
                    {{ message.text }}
                    <br>
                    <br>
                    Keywords：{{ message.Keywords }}<br>
                    <div v-if="'url' in message">
                        URL：<a :href="message.url" target="_blank">{{ message.urltxt }}</a>
                    </div>
                </div>
                <br>
                <button @click="rt()">
                    close
                </button>
            </div>
        </div>
        <div id="modal-overlay"></div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: ["message"],
    methods: {
        rt() {
            this.$emit("execute-method");
        },
    },
};
</script>

<style scoped>
.modal {
    padding: 10px 20px;
    border: 2px solid #a5272a;
    background: #faebd7;
    z-index: 2;
    display: block;
    text-align: center;
    position: fixed;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

.modal img {
  max-width: 100%;
  max-height: 250px;
}

.modal__message {
    margin-top: 10px;
}

#modal-overlay {
    z-index: 1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.75);
}
</style>