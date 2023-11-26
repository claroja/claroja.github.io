import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-XqA98pG8.js";const t={},o=p(`<h1 id="desiredcapabilities" tabindex="-1"><a class="header-anchor" href="#desiredcapabilities" aria-hidden="true">#</a> DesiredCapabilities</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> dlib
<span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv
<span class="token keyword">def</span> <span class="token function">landmark_as_tuples</span><span class="token punctuation">(</span>landmark<span class="token punctuation">)</span><span class="token punctuation">:</span>
    points <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token keyword">for</span> p <span class="token keyword">in</span> landmark<span class="token punctuation">.</span>parts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;all&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">,</span>
        <span class="token string">&quot;chin&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;left_eyebrow&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;right_eyebrow&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;nose_bridge&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;nose_tip&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">:</span><span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;left_eye&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">:</span><span class="token number">42</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;right_eye&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">:</span><span class="token number">48</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;top_lip&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">63</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">61</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;bottom_lip&quot;</span><span class="token punctuation">:</span> points<span class="token punctuation">[</span><span class="token number">54</span><span class="token punctuation">:</span><span class="token number">60</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">67</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>points<span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>
            points<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">drawLM</span><span class="token punctuation">(</span>landmark_tuple<span class="token punctuation">,</span> img<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> point <span class="token keyword">in</span> landmark_tuple<span class="token punctuation">:</span>
        cv<span class="token punctuation">.</span>circle<span class="token punctuation">(</span>img<span class="token punctuation">,</span> point<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment">## 1. 读取图片</span>
image <span class="token operator">=</span> cv<span class="token punctuation">.</span>imread<span class="token punctuation">(</span><span class="token string">&#39;zhourui.png&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 2. 定位人脸</span>
face_detector <span class="token operator">=</span> dlib<span class="token punctuation">.</span>get_frontal_face_detector<span class="token punctuation">(</span><span class="token punctuation">)</span>
face_locations <span class="token operator">=</span> face_detector<span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">## 3. 定人人脸标志</span>
face_pose_predictor <span class="token operator">=</span> dlib<span class="token punctuation">.</span>shape_predictor<span class="token punctuation">(</span><span class="token string">&quot;shape_predictor_68_face_landmarks.dat&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> face_location <span class="token keyword">in</span> face_locations<span class="token punctuation">:</span>
    x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1 <span class="token operator">=</span> face_location<span class="token punctuation">.</span>left<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> face_location<span class="token punctuation">.</span>top<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> face_location<span class="token punctuation">.</span>right<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> face_location<span class="token punctuation">.</span>bottom<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cv<span class="token punctuation">.</span>rectangle<span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    landmark <span class="token operator">=</span> face_pose_predictor<span class="token punctuation">(</span>image<span class="token punctuation">,</span> face_location<span class="token punctuation">)</span>
    landmark_tuple <span class="token operator">=</span> landmark_as_tuples<span class="token punctuation">(</span>landmark<span class="token punctuation">)</span>
    drawLM<span class="token punctuation">(</span>landmark_tuple<span class="token punctuation">[</span><span class="token string">&quot;bottom_lip&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> image<span class="token punctuation">)</span>

<span class="token comment">## show the image</span>
cv<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;face detection&#39;</span><span class="token punctuation">,</span> image<span class="token punctuation">)</span>
<span class="token comment">## keep the window open until we press a key</span>
cv<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">## close the window</span>
cv<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
	IdxRange jaw<span class="token punctuation">;</span>       <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
	IdxRange rightBrow<span class="token punctuation">;</span> <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
	IdxRange leftBrow<span class="token punctuation">;</span>  <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">]</span>
	IdxRange nose<span class="token punctuation">;</span>      <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span>
	IdxRange rightEye<span class="token punctuation">;</span>  <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">]</span>
	IdxRange leftEye<span class="token punctuation">;</span>   <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">]</span>
	IdxRange mouth<span class="token punctuation">;</span>     <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">]</span>
	IdxRange mouth2<span class="token punctuation">;</span>    <span class="token operator">//</span> <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.cnblogs.com/as3asddd/p/7257820.html https://ibug.doc.ic.ac.uk/resources/facial-point-annotations/</p>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","landmark.html.vue"]]);export{r as default};
