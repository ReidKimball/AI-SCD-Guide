import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// see more at: https://www.npmjs.com/package/react-markdown/v/8.0.6#use
import Copy_Text from './Copy_Text'

export default function Meal_AI(props) {

    return (
            <section className="suggested-recipe-container prose prose-slate max-w-none" aria-live='polite'>
                <div ref={props.ref}> {/* received from Meal_Service.jsx as a prop named ref. the ref= is a special propery of the div tag */}
                    <div className='py-8 flex items-center gap-2'>
                        <div className='text-4xl font-bold'>SCD Guide says:</div>
                        <Copy_Text AI_Text={props.mealText}/>
                    </div>
                </div>
                <article className="prose prose-headings:font-bold prose-p:my-4 prose-ul:list-disc prose-ol:list-decimal" aria-live="polite">
                    <ReactMarkdown children={props.mealText} remarkPlugins={[remarkGfm]}/>
                </article>
            </section>
    )
}