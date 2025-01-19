import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// see more at: https://www.npmjs.com/package/react-markdown/v/8.0.6#use
import Copy_Text from './Copy_Text'

export default function Recipe_AI(props) {
    
    return (
            <section className="suggested-recipe-container prose prose-slate max-w-none" aria-live='polite'>
                <div className='py-8 flex items-center gap-2'>
                    <div className='text-4xl font-bold'>SCD Guide says:</div>
                        <Copy_Text AI_Text={props.recipeText}/>                
                    </div>
                
                <article className="prose prose-headings:font-bold prose-p:my-4 prose-ul:list-disc prose-ol:list-decimal" aria-live="polite">
                    <ReactMarkdown children={props.recipeText} remarkPlugins={[remarkGfm]}/>
                </article>
            </section>
    )
}