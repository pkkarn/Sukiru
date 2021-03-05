<template>
    <div id="footer-comp">
        <div class="container">
        <div class="row">
            <div class="col-3">
                <img src="../assets/logo.png" class="footer-logo" alt="">
            </div>
            <div class="col-3">
                <p class="heading">Sukiru Pvt. Ltd</p>
                <p>Copyright &copy; 2021. All Rights Reserved </p>
            </div>
            <div class="col-3">
                <p class="heading sec">Terms of Services</p>
                <div class="list-footer">Privacy and policy</div>
                <div class="list-footer">Products</div>
                <div class="list-footer">Features</div>
                <div class="list-footer">Support</div>
            </div>
            <div class="col-3">
                <p class="heading sec">Contact Us</p>
                <div class="list-footer"><i class="mr-1 fab fa-facebook"></i> Facebook</div>
                <div class="list-footer"><i class="mr-1 fab fa-twitter"></i> Twitter</div>
                <div class="list-footer"><i class="mr-1 fab fa-linkedin"></i> LinkedIn</div>

            </div>
        </div>
        </div>
        
    </div>
</template>

<style lang="scss">
@import '../assets/sass/main.scss';

    #footer-comp {
        padding: 70px;
        background-color: lighten($primary-color, 5%);
        color: #fff;
        font-family: $primary-font;

        .footer-logo {
            width: 70px;
            border: 2px solid #fff;
        }
        .heading {
            font-weight:800;
            font-size: 22px;
        }
        .list-footer {
            padding-bottom: 10px;
        }

        .sec {
            font-weight: 400!important;
            font-size: 17px;
        }
    }
</style>