<template>
        <div class="container">

            <br>
            <div class="row">
                <div class="col-md-12">
                   <input type="text" class="form-control" v-model="user.name" placeholder="Customer Name : " style="width:43%;display:inline">
                    <input type="text" class="form-control" v-model="user.address" placeholder="Customer Address :" style="width:44%;display:inline">
                    
                    <button 
                    class="btn btn-success"
                    @click="addCustomer()">
                    Add Customer
                    </button>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(customer , index)  in  customerlists">
                            <td>{{ index+1 }} </td>
                            <td>{{ customer.name}}</td>
                            <td>{{ customer.address}}</td>
                            <td>
                                <button class="btn btn-danger" @click="removeCustomerInfo(index)">Delete</button>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                </div>

                <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Buyer</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                         
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="removeCustomerInfo()">Save</button>
                      </div>
                    </div>
                  </div>
                </div>


            </div>
        </div>
</template>

<script>
export default {
  name: 'CustomerList',
  data () {
    return {
        
        user:{
           name:'',
           address:'',
        },
        customerlists: [
            {
                name: 'Rosaura R. Pond',
                address: '4351 Adams Drive Fayetteville, TX 78940',
            },
            {
                name: 'Steve D. Tyson',
                address: '2753 Friendship Lane Oakland, CA 94607',
            },
         ]
        }
      },
      methods: {
        addCustomer(){

            if(this.user.name == '' || this.user.address == ''){

                alert('Field must be required');
            } else {
                this.customerlists.push(this.user);
                this.user = {};
            }
            
        },
        removeCustomerInfo(userIndex) {
            this.customerlists.splice(userIndex, 1);
        },
        
    },
    
}
</script>


