<template>
      <nav>
           <v-toolbar flat app color="pink darken-1" height="60">
           <v-toolbar-title class="text-uppercase white--text">
               <router-link to="/">
                 <span class="font-weight-light">Best</span>
                 <span>Deals</span>
               </router-link>
           </v-toolbar-title>
           <v-spacer></v-spacer>
                        <div class="search-bar">
                            <v-text-field
                                append-icon="mic"
                                class="mx-5"
                                flat
                                label="Search"
                                prepend-inner-icon="search"
                                solo-inverted
                                background-color="white"
                            ></v-text-field>  
                        </div>
                        <v-divider vertical dark></v-divider>
                        <v-btn flat class="white--text">
                         cart <v-icon>shopping_cart</v-icon>
                        </v-btn>
                        <v-divider vertical dark></v-divider>
                        <v-menu offset-y>  
                        <v-btn flat slot="activator" color="white">
                        <v-icon>expand_more</v-icon>
                        <span>more</span>
                        </v-btn>    
                        <v-list>
                            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                                <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                        </v-menu>
        </v-toolbar>
      </nav>
</template>

<script>
const fb = require('../firebase.js')

    export default {
        components: {
        },
        data() {
            return {
                 links: [
                    { icon: 'dashboard', text: 'dashboard', route: '/dashboard' },
                    { icon: 'grid_on', text: 'products', route: '/products' },
                    { icon: 'supervisor_account', text: 'customers', route: '/Customers' },
                    { icon: 'build', text: 'settings', route: '/settings' },
                    { icon: 'build', text: 'signout', route: '/settings' },
                ],
                // email: 'viperlohith121@gmail.com',
                // password: 'awesome',
                // name: 'lohith'
            }
        },
        methods: {
            // signup() {
            //     fb.auth.createUserWithEmailAndPassword(this.email, this.password)
            //     .then(user => {
            //         console.log('user created successfully')
            //         // console.log('uuser' +user)
            //         // console.log('uuser' + user.email)
            //         alert(`accnt created with ${user.user.email}`)
            //         alert(`accnt created with ${user.user.displayName}`)
            //         alert(`accnt created with ${user.user.emailVerified}`)
            //         alert(`accnt created with ${user.user.uid}`)

            //         fb.usersCollection.doc(user.user.uid).set({
            //             email: this.email,
            //             name: this.name
            //         })
            //         .then(() => {
            //             console.log('user added successfully')
            //         })
            //         .catch(err => {
            //             throw err
            //         })
            //     })
            //     .catch(err => {
            //         throw err
            //     })
            // }
        }
    }
</script>

<style scoped>
   .search-bar {
      height: 30px;
   }
     a {
     text-decoration: none;
    }
</style>