import React, { useEffect, useState } from "react";
import client from "../client";
import { AiFillGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import styled from "styled-components";
const Project = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
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
  console.log(postData);
  return (
    <Container className="project" id="project">
      <div className="project-content">
        <span>
          const Project = (<label className="project_props">Projects</label>) ⇒
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
                    <div className="card">
                      <div className="card_img">
                        <img src={post.mainImage.asset.url} alt="hello" />
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
        <p className="bracket_end">﹜</p>
      </div>
    </Container>
  );
};

export default Project;
const Container = styled.div`
  height: auto;
  width: 100vw;
  color: #dbdbdb;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.65) 100%
  );

  .project-content {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    /* height: 100vh; */

    span {
      color: #dbdbdb;
      font-size: 3rem;
      font-weight: 700;
      /* padding:10px 50px; */
      @media (max-width: 480px) {
        /* font-size: rem; */
        /* padding-top: 0; */
        padding: 0.3rem;
      }
    }
    p,
    .bracket_end {
      color: #222;
      font-size: 7rem;
      font-weight: 800;
      /* padding: 0; */
      height: 100%;
      line-height: 70px;
      transform: scale(1, 1.3);

      text-shadow: 4px 1px rgba(133, 127, 127, 0.5);
      @media (max-width: 480px) {
        font-size: 5.5rem;
        padding: 0;
        /* margin:0; */
      }
    }
    .project_props {
      color: #682ae9;
    }
    .bracket_end {
      /* display: none; */
      align-self: flex-end;
      margin-bottom: 3rem;
    }

    .containers {
      max-width: 75%;
      margin: 0 auto;
      /* height: 100vh; */
      /* border: 1px solid red; */

      .grid {
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
        margin: 1rem 0;
        row-gap: 2rem;
        /* border: 1px solid red; */
        @media (max-width: 480px) {
          grid-template-columns: 100%;
          margin: 2rem 0;
          /* align-items: start; */
          /* margin-left: 1rem; */
          /* margin:0; */
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
            /* padding-top: 1rem; */
            /* padding: 26px 20px 36px 20px; */

            .card_title {
              /* font-family: 'Merriweather',
      serif;
  font-weight: 900;
  text-transform: capitalize; */

              font-size: 1.3rem;
              /* padding-bottom: 20px; */
            }
            span {
              /* padding-top: 2rem; */
              font-size: 0.8rem;
              font-weight: 500;
              color: #777;

              /* border: 1px solid red; */

              /* padding: 0; */
              /* line-height: normal */
              /* line-height: 1; */
            }
          }

          .card__footer {
            width: 100%;
            display: flex;
            padding-right: 1rem;
            gap: 1.2rem;
            justify-content: flex-end;
            align-items: center;
            /* border: 1px solid red; */

            a {
              text-decoration: none;
              color: #777;
              align-items: center;
            }
            .read_more {
              color: #777;
              font-size: 1.5rem;
              text-decoration: none;
              /* letter-spacing: 1.1px; */
              /* background: #0F1616; */
              /* margin-top: 50px; */
              /* padding: 24px 0px; */
              border-radius: 15px;
              /* display: inline-block; */

              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
`;
