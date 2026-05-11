import { MDXContent } from '@content-collections/mdx/react'
// import { allPosts } from 'content-collections';

import { formattedDate } from '#/lib/utls.ts'
import { Route } from '#/routes/blogs/$slug.tsx'
import BlogSidebar from './BlogSidebar'
import BlogDetailsImg1 from '/assets/images/blog/blog-details-img-1.jpg'

// import BlogDetailsImgBoxImg1 from '/assets/images/blog/blog-details-img-box-img-1.jpg'
// import BlogDetailsImgBoxImg2 from '/assets/images/blog/blog-details-img-box-img-2.jpg'
// import Comment11 from '/assets/images/blog/comment-1-1.jpg'
// import Comment12 from '/assets/images/blog/comment-1-2.jpg'

const BlogDetailsMain: React.FC = () => {
  // const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  // }

  // const blog = allPosts[0]
  const blog = Route.useRouteContext()

  // const tags = [];

  // blog.categories.forEach((category) => {
  //   if (!tags.includes(category)) {
  //     tags.push(category);
  //   }
  // });

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <article id="blog">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img
                    src={BlogDetailsImg1}
                    width={850}
                    height={509}
                    alt="Image"
                  />
                  <div className="blog-details__date">
                    <p>{formattedDate(blog.createdAt)}</p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="icon-user-11"></span>By {blog.author}
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fas fa-clock"></span>
                          {blog.readTime} Min Read
                        </a>
                      </li>
                    </ul>
                  </div>

                  <MDXContent code={blog.mdx} />
                  {/* <h3 className="blog-details__title">
                  Elase They Endures Pains to Avoid The Worse Pains Taken
                </h3>
                <p className="blog-details__text-1">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  inure dolor in the reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat null pariatur. Excepteur snit occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="blog-details__text-2">
                  The wise man therefore always holds in these matters to this
                  principle of selection. He rejects pleasures to secure other
                  greater pleasures, or else he endures pains to avoid worse
                  pains to the selection point.
                </p>
                <div className="blog-details__author-box">
                  <h4 className="blog-details__author-text">
                    “Sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua. Uther enim minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate”
                  </h4>
                  <p className="blog-details__author-name">
                    Kane Williamson<span> / CEO</span>
                  </p>
                </div>
                <h3 className="blog-details__title-2">
                  Sundress Pains to Avoid The Worse Pains
                </h3>
                <p className="blog-details__text-3">
                  Out enigma ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  inure dolor in the reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat null pariatur. Excepteur snit occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="blog-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="blog-details__img-box-img">
                        <img
                          src={BlogDetailsImgBoxImg1}
                          width={410}
                          height={245}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="blog-details__img-box-img">
                        <img
                          src={BlogDetailsImgBoxImg2}
                          width={410}
                          height={245}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <h3 className="blog-details__tag-title">Tags :</h3>

                      <div
                        className={
                          'd-flex flex-wrap align-items-center justify-content-center gap-2'
                        }
                      >
                        {blog.categories.map((category) => (
                          <span
                            className={'badge bg-secondary text-white'}
                            key={category}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      {/* <ul className="blog-details__tag-list list-unstyled">
                      {blog.categories.map((category) => (
                        <li className={'badge'}>
                          <a href="#">{category}</a>
                        </li>
                      ))}
                      <li>
                        <a href="#">Analysis</a>
                      </li>
                      <li>
                        <a href="#">Planning</a>
                      </li>
                      <li>
                        <a href="#">Management</a>
                      </li>
                    </ul> */}
                    </div>
                    <div className="blog-details__share-box">
                      <h3 className="blog-details__share-title">Share :</h3>
                      <div className="blog-details__share">
                        <a href="#" title="Facebook">
                          <span className="icon-facebook"></span>
                        </a>
                        <a href="#" title="Twitter">
                          <span className="icon-xpa"></span>
                        </a>
                        <a href="#" title="Linkedin">
                          <span className="icon-link-in"></span>
                        </a>
                        <a href="#" title="Instagram">
                          <span className="icon-instagram"></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="comment-one">
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src={Comment11} width={70} height={70} alt="" />
                    </div>
                    <div className="comment-one__content">
                      <h3>Theresa Webb</h3>
                      <span>02 June 2024 at 03:30 pm</span>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection. He rejects pleasures to
                        secure other greater pleasures, or else he endures pains
                        to avoid worse pains to the selection point. But in
                        certain to all this circumstances
                      </p>
                      <div className="comment-one__btn-box">
                        <a href="/blog-details" className="comment-one__btn">
                          <span className="icon-share-alt"></span>Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src={Comment12} width={70} height={70} alt="" />
                    </div>
                    <div className="comment-one__content">
                      <h3>Cameron Williamson</h3>
                      <span>02 June 2024 at 03:30 pm</span>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection. He rejects pleasures to
                        secure other greater pleasures, or else he endures pains
                        to avoid worse pains to the selection point. But in
                        certain to all this circumstances
                      </p>
                      <div className="comment-one__btn-box">
                        <a href="/blog-details" className="comment-one__btn">
                          <span className="icon-share-alt"></span>Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div className="comment-form">
                  <h3 className="comment-form__title">Leave A Reply</h3>
                  <p className="comment-form__text">
                    By using form u agree with the message sorage, you can
                    contact us directly now
                  </p>
                  <form
                    className="comment-one__form contact-form-validated"
                    onSubmit={handleComment}
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Write your messege"
                          ></textarea>
                        </div>
                        <div className="comment-form__btn-box">
                          <button
                            type="submit"
                            className="footer-widget__newsletter-btn thm-btn"
                          >
                            submit now
                            <span>
                              <i className="icon-arrow-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result"></div>
                </div> */}
                </div>
              </div>
            </article>
          </div>
          {/* Start Sidebar*/}
          <BlogSidebar wrapper="col-xl-4 col-lg-5" inner="sidebar" />
          {/* End Sidebar*/}
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsMain
