<template>
    <v-app>
        <v-container>
             <v-layout row wrap justify-space-around>
                 <v-flex xs12 md2>
                     <v-card height="350">
                         <v-card-title class="body-2">Top catagories</v-card-title>
                         <v-card-content>
                            <v-card-text>Mobiles</v-card-text>
                            <v-card-text>Accessories</v-card-text>
                            <v-card-text>Tablets</v-card-text>
                            <v-card-text>Laptops</v-card-text>
                            <v-card-text>SD carks</v-card-text>
                         </v-card-content>
                     </v-card>
                 </v-flex>
                  <v-flex xs8 md7>
                     <v-card>
                         <v-carousel hide-delimiters height="300">
                            <v-carousel-item
                              v-for="(item,i) in items"
                              :key="i"
                              :src="item.src"
                            ></v-carousel-item>
                          </v-carousel>
                         <v-card-actions>
                          <v-btn flat color="grey lowercase--text">Men</v-btn>
                          <v-divider vertical light></v-divider>
                          <v-btn flat color="grey">Women</v-btn>
                          <v-divider vertical light></v-divider>
                          <v-btn flat color="grey">Free wear</v-btn>
                        </v-card-actions>
                     </v-card>
                 </v-flex>
                  <v-flex xs2 md2>
                     <v-card height="350">
                         <v-img
                          src="/ad-3.png"
                        ></v-img>
                     </v-card>
                 </v-flex>
             </v-layout>
            <v-divider class="mt-3 mb-3"></v-divider>
            <div class="display-1 grey--text mx-3">Products</div>
             <v-layout row wrap justify-space-between class="mt-3">
                 <v-flex xs4 md2 class="mx-3 mt-3" v-for="product in products" :key="product.name" >
                     <v-card height="340">    
                           <v-img class="mx-4" height="150"
                                :src="product.src"
                                aspect-ratio="2.75"
                            ></v-img>
                         <v-card-title primary-title>
                          <div>
                              <div style="height:40px;justify-content:center">
                                 <v-chip v-if="product.refurbished" small color="indigo" text-color="white">
                                    <v-avatar>
                                      <v-icon>account_circle</v-icon>
                                    </v-avatar>
                                    Refurbished
                                </v-chip>
                              </div>
                                <h3 class="subheading mb-0 text-uppercase">{{ product.name }}</h3>
                                <div class="green--text">&#8377; 20% upto off </div>
                                <div class="green--text">INR &#8377; {{ product.price }}  </div>
                          </div>
                          <v-card-actions>
                            <v-btn color="success" small> <router-link to="/pview" class="white--text">view</router-link></v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-card>
                 </v-flex>
             </v-layout>
          <v-divider class="mt-3"></v-divider>

        </v-container>
    </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          src: "/poster-1.png"
        },
        {
          src: "/poster-2.png"
        },
        {
          src: "poster-3.png"
        },
        {
          src: "poster-4.png"
        }
      ],
      products: [
        { src: "/mobile-1.png", name: "xiomi", price: "20", refurbished: true },
        { src: "/mobile-3.png", name: "samsung", price: "30", refurbished: false },
        { src: "/mobile-1.png", name: "apple", price: "45" , refurbished: false},
        { src: "/mobile-3.png", name: "mc", price: "45", refurbished: true },
        { src: "/mobile-1.png", name: "vivo", price: "45" , refurbished: true },
        { src: "/mobile-6.png", name: "xiomi", price: "20" , refurbished: true},
        { src: "/sd-1.png", name: "samsung", price: "30" , refurbished: false},
        { src: "/drive-1.png", name: "apple", price: "45" , refurbished: true},
        { src: "/ssd-1.png", name: "mc", price: "45" , refurbished: false},
        { src: "/ram-1.png", name: "vivo", price: "45" ,refurbished: true}
      ]
    };
  }
};
</script>

<style scoped>
</style>

