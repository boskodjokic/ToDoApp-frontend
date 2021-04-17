import axios from 'axios'

class GreetingService {
    executeHelloWorldService() {
         return axios.get('http://localhost:8080/hello-world')
       
    }

    executeGreetingService(name) {
        return axios.get(`http://localhost:8080/greeting/${name}`
        );
   }
 }

export default new GreetingService() 