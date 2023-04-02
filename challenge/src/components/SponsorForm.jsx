import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SponsorForm extends React.Component {

  constructor () {
    super();
    this.state = {name: '',amount: '',submittedName: '',rating: 0, show: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.amount > 0){
      this.setState({show: true, submittedName: this.state.name});
      console.log('Name:' + this.state.name);
      console.log('Amount: $' + this.state.amount);
      if(this.state.amount >= 100) {
        this.setState({rating: 5});
      } else if (this.state.amount >= 50) {
        this.setState({rating: 4});
      }  else if (this.state.amount >= 25) {
        this.setState({rating: 3});
      } else if (this.state.amount >= 10) {
        this.setState({rating: 2});
      } else if (this.state.amount < 10 && this.state.amount > 0){
        this.setState({rating: 1});
      }
  
      if (this.state.amount < 20 && this.state.amount > 0){
        const sponser_name = localStorage.getItem("username") !== null ? " " + localStorage.getItem("username"): "you";
        alert("Sponsor alert: With the amount that" +
        sponser_name + 
        " donated, you are too broke to be a sponsor")
      }
  
      event.preventDefault();
    } else{
      alert("Amount cannot be empty, 0, or negative values. Try again")
      event.preventDefault();
    }
  }
  render () {
    return (
      <form style={{margin: "20px"}} onSubmit={this.handleSubmit}>
        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
          
        }}>
        DONATE NOW:
        </div>
        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
     
        <TextField style={{margin: "10px"}} variant="filled" label="Name" type="text" name="name" onChange={this.handleChange} />
        <TextField style={{margin: "10px"}}  variant="filled" label="Amount" type="number" name="amount" onChange={this.handleChange}/>
        </div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
        <Button type="submit" color="secondary" variant="outlined">Become A Sponsor Now!</Button>
        <p>&nbsp;</p>
        {this.state.show && <p>{this.state.rating} Star Sponsor:&nbsp; </p>}
        {this.state.show && <p> {this.state.submittedName}</p>}
        </div>
      </form>
    );
  }
}
export default SponsorForm
