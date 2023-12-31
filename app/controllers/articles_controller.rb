class ArticlesController < ApplicationController
  before_action :set_article, only: [:edit, :update, :show, :destroy]
  
  def index
    @articles = Article.paginate(page: params[:page], per_page: 5)

  end

  def show
  end

  def new
    @article = Article.new
  end

  def edit
  end 

  def create
    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save
      flash[:notice] = "Article was created successfully."
      redirect_to @article
    else 
      render 'new'
    end 
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path, notice: "Article was deleted successfully."
  end

  def update
    if @article.update(article_params)
      flash[:notice] = "Article was updated successfully."
      redirect_to @article
    else   
      render 'edit'
    end
  end

  

  private 

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :description)
  end
end