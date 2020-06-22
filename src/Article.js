import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visisble: false,
        }
    }

    handleDetailOpen = (e) => {
        e.preventDefault()
        this.setState({ visible: true })
    }

    handleDetailClose = () => {
        this.setState({ visible: false })
    }

    articleDeleteHandler = (id) => {
        console.log('id', id)
        if (this.props.articleDeleteHandler) {
            this.props.articleDeleteHandler(id)
        }
    }

    render() {
        const { author, text, bigText } = this.props.item;
        const { id } = this.props.id;

        const { visible } = this.state
        return (
            <div key={id} className="article">
                <p className="article__author">{author}</p>
                <p className="article__text">{text}</p>
                {
                    !visible && <a onClick={this.handleDetailOpen} href="#" className='article__link'>Подробнее</a>
                }
                {
                    visible &&
                    <div className="article__text-big">
                        <div>{bigText}</div>
                        <div className="text-big__link">
                            <a onClick={this.handleDetailClose} className="article__link">Свернуть</a>
                        </div>
                    </div>
                }
                <IconButton aria-label="delete" className="article__btn-delete"  onClick={() => this.articleDeleteHandler(id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        )
    }
}

export default Article;
