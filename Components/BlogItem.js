import Link from 'next/link'
import ReactHtmlParser from "react-html-parser";
import blogimg1 from '../public/assets/img/blog/image1.jpg'

export default function BlogItem({ data }) {

    var cDate;
    if (data["file"]) {
        var temp = data["file"];
        cDate = temp.createdAt;

        var result = new Date(cDate);
        result.setDate(result.getDate());
        var ddd = String(result.getDate()).padStart(2, "0");
        var mmm = String(result.getMonth() + 1).padStart(2, "0");
        var yyyyy = result.getFullYear();
        var monthsName = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var previousMonth =
            ddd + " " + monthsName[parseInt(mmm) - 1] + ", " + yyyyy;
    }
    //   blog-list
    return (
        <div className="blog_item">
            <Link as={`/blog/${data.id}`} href={{ pathname: '/blog', query: { id: data.id } }}>
                <a href="" className="w-100 h-100">
                    {
                        data.file ?
                            <img className="mb-3" src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + data.file.path} alt={data.blogTitle} /> :
                            <img className="mb-3" src={blogimg1} alt="blog image" />
                    }
                    <h3 className="w-100 text-left blog__title">{data.blogTitle}</h3>
                    <div className="blog__post">{ReactHtmlParser(data.post)}</div>
                </a>
            </Link>
        </div>
    )
}