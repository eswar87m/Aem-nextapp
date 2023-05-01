export interface Component {
    path: string;
    type: string;
    [key: string]: any;
  }
  
  export interface Page {
    path: string;
    components: Component[];
  }
  