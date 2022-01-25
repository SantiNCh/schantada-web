import React from "react";

const Post = () => {
    return(
        <section className="s1">
            <div className="main-container">
                <h3 style={{textAlign: 'center'}}>Some of my past projects</h3>
                <div className="post-wrapper">

                    <div>
                        <div className="post">
                            <img className="thumbnail"  src={require('./Blank_square.svg.png')} />
                            <div className="post-preview">
                                <h6 className="post-title">Coming soon</h6>
                                <p className="post-intro">Coming soon</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <img className="thumbnail"  src={require('./Blank_square.svg.png')} />
                            <div className="post-preview">
                                <h6 className="post-title">Coming soon</h6>
                                <p className="post-intro">Coming soon</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <img className="thumbnail"  src={require('./Blank_square.svg.png')} />
                            <div className="post-preview">
                                <h6 className="post-title">Coming soon</h6>
                                <p className="post-intro">Coming soon</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Post;