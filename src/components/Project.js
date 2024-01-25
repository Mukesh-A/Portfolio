import React, { useEffect, useState } from "react";
import client from "../client";
import { AiFillGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import styled from "styled-components";
import noimg from "../noimg.png";
const Project = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]|order(_createdAt asc){
      title,
      slug,
      body,
      github,
      live,
      mainImage{
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error());
  }, []);
  // console.log(postData);
  return (
    <Container className="project" id="project">
      <div className="project-content">
        <span className="project--title">
          {/* const Projects = (<label className="project_props">Project</label>) ⇒ */}
          Projects . map ( (<label className="project_props">Project</label>) ⇒
        </span>
        <p>﹛</p>
        <div className="containers">
          <div className="grid">
            {postData &&
              postData
                .slice(0)
                .reverse()
                .map((post, index) => {
                  return (
                    <div className="card" key={index}>
                      <div className="card_img">
                        <img
                          src={post.mainImage?.asset.url || noimg}
                          alt="no"
                        />
                      </div>
                      <div className="card_body">
                        <h2 className="card_title">{post.title}</h2>
                        <span>{post.body}</span>
                      </div>
                      <div className="card__footer">
                        {post.live && (
                          <a
                            href={post.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GoBrowser className="read_more" />
                          </a>
                        )}
                        <a
                          href={post.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub className="read_more" />
                        </a>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <p className="bracket_end">﹜<label className="bracket_props">)</label></p>
      </div>
    </Container>
  );
};

export default Project;
const Container = styled.div`
  height: auto;
  width: 100vw;
  color: #dbdbdb;
  /* background: #0000"; */
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.65) 100%
  );

  .project-content {
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    .project--title {
      margin: 1rem;
      word-spacing: -.1em;
    }
    span {
      color: #dbdbdb;
      font-size: 3.5rem;
      font-weight: 700;
      @media (max-width: 480px) {
        padding: 0.3rem;
        font-size: 2.5rem;
      }
    }
    p,
    .bracket_end {
      /* margin-top:1rem; */
      color: #222;
      font-size: 7rem;
      font-weight: 800;
      height: 100%;
      line-height: 70px;
      transform: scale(1, 1.3);
      text-shadow: 4px 1px rgba(133, 127, 127, 0.5);
      @media (max-width: 480px) {
        font-size: 5.5rem;
        padding: 0;
      }
    }
    .project_props {
      color: #682ae9;
    }
    .bracket_end {
      align-self: flex-end;
      margin-bottom: 3rem;
    }
    .bracket_props{
      color:#dbdbdb;
    }

    .containers {
      max-width: 75%;
      margin: 0 auto;

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
        margin: 1rem 0;
        row-gap: 2rem;

        @media (max-width: 480px) {
          grid-template-columns: 100%;
          margin: 2rem 0;
        }

        .card {
          overflow: hidden;
          padding: 15px;
          background-color: #0e1212;
          border-radius: 13px;
          text-align: center;
          display: flex;
          gap: 0.5rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .card_img img {
            width: 100%;
            height: auto;
            border-radius: 5px;
            object-fit: fill;
          }

          .card_body {
            text-align: start;
            height: 8rem;
            overflow-y: auto;
            .card_title {
              font-size: 1.3rem;
            }
            span {
              font-size: 0.8rem;
              font-weight: 500;
              color: #777;
            }
          }

          .card__footer {
            width: 100%;
            display: flex;
            padding-right: 1rem;
            gap: 1.2rem;
            justify-content: flex-end;
            align-items: center;

            a {
              text-decoration: none;
              color: #777;
              align-items: center;
            }
            .read_more {
              color: #777;
              font-size: 1.5rem;
              text-decoration: none;
              border-radius: 15px;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
`;
