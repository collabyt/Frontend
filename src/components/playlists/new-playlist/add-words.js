import React from 'react';
import "./add-playlist.css";
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
import * as keywordsApi from '../../../api/keywords-api';
  
class AddWords extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
          tags: [],
          hintData: []
        };
      }
      
      removeTag = (i) => {
        const newTags = [ ...this.state.tags ];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
      }
    
      inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          this.setState({ tags: [...this.state.tags, val]});
          this.tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
          this.removeTag(this.state.tags.length - 1);
        }
      }

      handleChange = async (e) => {
          if (e.target.value.length > 2) {
            const response = await axios.get(keywordsApi.getKeywords(e.target.value))
            var hintArray = []

            response.data.map(a => hintArray.push(a.keyword))
            this.setState({hintData: hintArray})
          }
          
      }

      
    
      render() {
        const { tags } = this.state;
    
        return (
          <div className="input-tag">
            <ul className="input-tag__tags">
              { tags.map((tag, i) => (
                <li key={tag}>{tag}
                  <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                </li>
              ))}
              <li className="input-tag__tags__input">
                <Hint options={this.state.hintData} allowTabFill>
                  <input className="input-with-hint" type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} onChange={this.handleChange}/>
                </Hint>
               </li>
            </ul>
          </div>
        );
      }
  
}

export default AddWords;


