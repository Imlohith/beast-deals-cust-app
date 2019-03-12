    <template>
        <v-container>
            <v-layout justify-space-around>
                <v-flex xs12 md5>
                    <v-card height="400">
                        <div class="pt-3">
                            <v-img src="/mobile-1.png"></v-img>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-card flat height="400">
                    <span class="headline">Xiomi A7</span>
                    <v-card-content>
                            <div class="green--text">price: &#8377; 45</div>
                            <v-chip small color="indigo" text-color="white">
                                    <v-avatar>
                                      <v-icon>account_circle</v-icon>
                                    </v-avatar>
                                    Refurbished
                                </v-chip>
                    </v-card-content>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-divider class="mx-3 mt-3"></v-divider>
             <div class="display-1 grey--text mx-3 mt-3">Related products</div>
             <v-layout row wrap justify-space-between class="mt-3">
                 <v-flex xs2 md2 class="mx-3 mt-3" v-for="product in products" :key="product.name" >
                     <v-card height="320">    
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
                            <v-btn color="success" small>view </v-btn>
                          </v-card-actions>
                        </v-card-title>
                      </v-card>
                 </v-flex>
             </v-layout>
        </v-container>
    </template>

    <script>
        export default {    
            data() {
                return {
                     products: [
                        { src: "/mobile-1.png", name: "xiomi", price: "20", refurbished: true },
                        { src: "/mobile-3.png", name: "samsung", price: "30", refurbished: false },
                        { src: "/mobile-1.png", name: "apple", price: "45" , refurbished: false},
                        { src: "/mobile-3.png", name: "mc", price: "45", refurbished: true },
                        { src: "/mobile-1.png", name: "vivo", price: "45" , refurbished: true },
                    ]
                }
            },
        }
    </script>

    <style scoped>

    </style>